export async function exportToPDF(title: string, content: string, filename: string) {
  try {
    // Create a simple HTML document
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <div>${content}</div>
          <p style="margin-top: 40px; color: #666; font-size: 12px;">
            Generated on ${new Date().toLocaleString()}
          </p>
        </body>
      </html>
    `

    // Create blob and download
    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${filename}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error exporting PDF:", error)
  }
}
