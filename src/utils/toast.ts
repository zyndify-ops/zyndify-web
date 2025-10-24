import { toast, type ToastOptions, type ToastPosition } from 'react-toastify'

// Set default position to bottom-right
const DEFAULT_POSITION: ToastPosition = 'bottom-right'

const TOAST_OPTIONS: ToastOptions = {
  position: DEFAULT_POSITION, // bottom-right
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  style: { maxWidth: '300px' }, // limit toast width
}
export const showSuccess = (message: string) => {
  toast.success(message, TOAST_OPTIONS)
}

export const showError = (message: string) => {
  toast.error(message, TOAST_OPTIONS)
}

export const showInfo = (message: string) => {
  toast.info(message, TOAST_OPTIONS)
}

export const showWarning = (message: string) => {
  toast.warning(message, TOAST_OPTIONS)
}
