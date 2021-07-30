import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const error = (msg) => toast.error(msg);
const success = (msg) => toast.success(msg);
const info = (msg) => toast.info(msg);
const warning = (msg) => toast.warn(msg);
const dark = (msg) => toast.dark(msg);

const Toast = { error, success, info, warning, dark };

export default Toast;
