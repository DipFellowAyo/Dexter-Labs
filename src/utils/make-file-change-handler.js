export default function makeFileChangeHandler ({
  key,
  // setPreview,
  setFieldValue,
  setFieldError,
  setFieldTouched,
  maxFileSize = 1,
  mimeErrorMessage = 'Images only please.',
  fileTypeRegex = /^data:image\/(\w+);base64,/,
  fileSizeErrorMessage = `File size cannot be more than ${maxFileSize}MB.`
}) {
  return e => {
    e.persist()

    if (!e.target.files.length) {
      return setFieldValue(key, '')
    }

    setFieldTouched(key, true, false)

    const file = e.target.files[0]

    const fileSize = file.size / 1024 / 1024

    if (fileSize > maxFileSize) {
      e.target.value = ''

      return setFieldError(key, fileSizeErrorMessage)
    }

    const reader = new window.FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      const dataURI = reader.result

      if (!fileTypeRegex.test(dataURI)) {
        return setFieldError(key, mimeErrorMessage)
      }

      // setPreview(dataURI)

      setFieldValue(key, dataURI)
    }

    reader.onerror = () => setFieldValue(key, '')
  }
}
