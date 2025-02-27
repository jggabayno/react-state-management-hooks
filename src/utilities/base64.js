export default function base64(file, response) {
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = (e) => response(e.target.result);
    reader.onerror = (error) => response(error);
  }
}
