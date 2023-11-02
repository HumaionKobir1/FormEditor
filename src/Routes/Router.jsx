import { createBrowserRouter } from "react-router-dom";
import FormEditor from "../pages/EditorForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <FormEditor></FormEditor>
    },
  ]);
  export default router;