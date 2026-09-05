export function useCloudinaryUpload() {
  const uploading = ref(false)
  const error = ref<string | null>(null)

  async function uploadFile(file: File): Promise<string> {
    uploading.value = true
    error.value = null
    try {
      // In Phase 2: fetch signature from /api/cloudinary-signature, then upload to Cloudinary API
      return URL.createObjectURL(file)
    } catch (err: any) {
      error.value = err.message || 'Upload failed'
      throw err
    } finally {
      uploading.value = false
    }
  }

  return {
    uploading,
    error,
    uploadFile,
  }
}
