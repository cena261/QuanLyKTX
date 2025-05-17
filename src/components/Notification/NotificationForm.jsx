"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash } from "lucide-react";

const NotificationForm = ({ notification, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    sender: "",
    recipients: [],
    attachments: [],
  });
  const [errors, setErrors] = useState({});
  const [recipient, setRecipient] = useState("");
  const [recipientType, setRecipientType] = useState("user"); // 'user', 'group', 'all'

  useEffect(() => {
    if (notification) {
      setFormData({
        title: notification.title || "",
        content: notification.content || "",
        sender: notification.sender || "",
        recipients: notification.recipients || [],
        attachments: notification.attachments || [],
      });
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const addRecipient = () => {
    if (!recipient.trim()) return;

    const newRecipient = {
      id: Date.now(),
      type: recipientType,
      value: recipient.trim(),
    };

    setFormData((prev) => ({
      ...prev,
      recipients: [...prev.recipients, newRecipient],
    }));

    setRecipient("");
  };

  const removeRecipient = (id) => {
    setFormData((prev) => ({
      ...prev,
      recipients: prev.recipients.filter((r) => r.id !== id),
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Create attachment objects
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file, // Keep the file object for upload
    }));

    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...newAttachments],
    }));
  };

  const removeAttachment = (id) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((a) => a.id !== id),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Tiêu đề không được để trống";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Nội dung không được để trống";
    }

    if (!formData.sender.trim()) {
      newErrors.sender = "Người gửi không được để trống";
    }

    if (formData.recipients.length === 0) {
      newErrors.recipients = "Phải có ít nhất một người nhận";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {notification ? "Chỉnh sửa thông báo" : "Tạo thông báo mới"}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Tiêu đề <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                  errors.title ? "border-red-500" : ""
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Nội dung <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                rows={5}
                value={formData.content}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                  errors.content ? "border-red-500" : ""
                }`}
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-500">{errors.content}</p>
              )}
            </div>

            {/* Sender */}
            <div>
              <label
                htmlFor="sender"
                className="block text-sm font-medium text-gray-700"
              >
                Người gửi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="sender"
                name="sender"
                value={formData.sender}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                  errors.sender ? "border-red-500" : ""
                }`}
              />
              {errors.sender && (
                <p className="mt-1 text-sm text-red-500">{errors.sender}</p>
              )}
            </div>

            {/* Recipients */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Người nhận <span className="text-red-500">*</span>
              </label>

              <div className="mt-1 flex">
                <select
                  value={recipientType}
                  onChange={(e) => setRecipientType(e.target.value)}
                  className="rounded-l-md border-r-0 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="user">Người dùng</option>
                  <option value="group">Nhóm</option>
                  <option value="all">Tất cả</option>
                </select>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder={
                    recipientType === "user"
                      ? "Nhập tên người dùng hoặc email"
                      : recipientType === "group"
                      ? "Nhập tên nhóm"
                      : "Tất cả người dùng"
                  }
                  className="flex-1 rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled={recipientType === "all"}
                />
                <button
                  type="button"
                  onClick={addRecipient}
                  className="rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              {errors.recipients && (
                <p className="mt-1 text-sm text-red-500">{errors.recipients}</p>
              )}

              {formData.recipients.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.recipients.map((r) => (
                    <div
                      key={r.id}
                      className="flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700"
                    >
                      <span className="mr-1">
                        {r.type === "all"
                          ? "Tất cả người dùng"
                          : r.type === "group"
                          ? `Nhóm: ${r.value}`
                          : r.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeRecipient(r.id)}
                        className="ml-1 text-indigo-500 hover:text-indigo-700 focus:outline-none"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tệp đính kèm
              </label>

              <div className="mt-1">
                <label className="flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-4 cursor-pointer hover:border-indigo-500">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <span className="relative rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        Tải lên tệp
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        onChange={handleFileChange}
                      />
                      <p className="pl-1">hoặc kéo thả vào đây</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF tối đa 10MB
                    </p>
                  </div>
                </label>
              </div>

              {formData.attachments.length > 0 && (
                <ul className="mt-2 divide-y divide-gray-200 border rounded-md">
                  {formData.attachments.map((file) => (
                    <li
                      key={file.id}
                      className="flex items-center justify-between py-2 px-4 text-sm"
                    >
                      <div className="flex items-center">
                        <span className="truncate">{file.name}</span>
                        <span className="ml-2 text-xs text-gray-500">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAttachment(file.id)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {notification ? "Cập nhật" : "Tạo mới"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationForm;
