import { createBrowserRouter } from "react-router-dom";

import Listposts from "./components/blog/ListPosts";
import Createpost from "./components/blog/CreatePost";
import PostListItem from "./components/blog/PostListItem";
import Views from "./components/blog/Views";
import Editpost from "./components/blog/editpost";
import Register from "./components/auth/register";
import Loginuser from "./components/auth/loginuser";

const router = createBrowserRouter([
    {path: '/login', element: <Loginuser/>},
    {path: 'signup', element: <Register/>},
    {path: 'blog', element: <Listposts/>},
    {path: 'blog/posts', element: <Createpost/>},
    {path: 'delete', element: <PostListItem/>},
    {path: 'views/:postId', element: <Views/>},
    {path: 'postedit/:postId', element: <Editpost/>},
]);
export default router;