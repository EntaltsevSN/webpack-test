import { createRoot } from "react-dom/client";
import App from "./app";
import './styles/style.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = document.getElementById('root');

if(!root) {
  throw new Error('root not found!');
}

const app = createRoot(root);

const router = createBrowserRouter([
  { path: '*', element: <App /> }
])

app.render(
    <RouterProvider router={router} />
);