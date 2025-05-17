// This is a mock service that would be replaced with actual API calls
const invoiceService = {
  getInvoices: async (params) => {
    try {
      // In a real implementation, this would be a fetch call to your Spring Boot backend
      // Example: const response = await fetch('/api/invoices?' + new URLSearchParams(params));
      console.log("Fetching invoices with params:", params);

      // Mock response
      return {
        content: [
          {
            id: 1,
            invoiceNumber: "INV-2023-001",
            studentName: "Nguyễn Văn A",
            roomNumber: "A101",
            amount: 1500000,
            status: "PAID",
            dueDate: "2023-05-15",
            createdDate: "2023-05-01",
          },
          // More invoice data...
        ],
        totalElements: 25,
        totalPages: 5,
        size: 5,
        number: 0,
      };
    } catch (error) {
      console.error("Error fetching invoices:", error);
      throw error;
    }
  },

  getInvoiceById: async (id) => {
    try {
      // In a real implementation, this would be a fetch call to your Spring Boot backend
      // Example: const response = await fetch(`/api/invoices/${id}`);
      console.log("Fetching invoice with ID:", id);

      // Mock response
      return {
        id: id,
        invoiceNumber: `INV-2023-00${id}`,
        studentName: "Nguyễn Văn A",
        roomNumber: "A101",
        amount: 1500000,
        status: "PAID",
        dueDate: "2023-05-15",
        createdDate: "2023-05-01",
        details: [
          { description: "Tiền phòng", amount: 1200000 },
          { description: "Tiền điện", amount: 200000 },
          { description: "Tiền nước", amount: 100000 },
        ],
      };
    } catch (error) {
      console.error(`Error fetching invoice with ID ${id}:`, error);
      throw error;
    }
  },

  updateInvoiceStatus: async (id, status) => {
    try {
      // In a real implementation, this would be a fetch call to your Spring Boot backend
      // Example:
      // const response = await fetch(`/api/invoices/${id}/status`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status })
      // });
      console.log(`Updating invoice ${id} status to ${status}`);

      // Mock response
      return { success: true };
    } catch (error) {
      console.error(`Error updating invoice ${id} status:`, error);
      throw error;
    }
  },

  createInvoice: async (invoiceData) => {
    try {
      // In a real implementation, this would be a fetch call to your Spring Boot backend
      // Example:
      // const response = await fetch('/api/invoices', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(invoiceData)
      // });
      console.log("Creating invoice with data:", invoiceData);

      // Mock response
      return {
        id: Math.floor(Math.random() * 1000),
        ...invoiceData,
        invoiceNumber: `INV-2023-${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(3, "0")}`,
        createdDate: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error creating invoice:", error);
      throw error;
    }
  },
};

export default invoiceService;
