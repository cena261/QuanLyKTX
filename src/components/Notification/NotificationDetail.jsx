"use client";

import { X } from "lucide-react";

const NotificationDetail = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Chi tiết thông báo
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                {notification.title}
              </h3>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  notification.read
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {notification.read ? "Đã đọc" : "Chưa đọc"}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Gửi bởi:{" "}
              <span className="font-medium">{notification.sender}</span> •
              {new Date(notification.createdAt).toLocaleString("vi-VN")}
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              {notification.content}
            </div>

            {notification.attachments &&
              notification.attachments.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Tệp đính kèm
                  </h4>
                  <ul className="space-y-2">
                    {notification.attachments.map((attachment, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <a
                          href={attachment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                        >
                          <span className="underline">{attachment.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {notification.actions && notification.actions.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Hành động
                </h4>
                <div className="flex flex-wrap gap-2">
                  {notification.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(action.url, "_blank")}
                      className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-2 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
