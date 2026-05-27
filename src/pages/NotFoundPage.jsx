
import {Link} from "react-router";

export default function NotFoundPage() {
    return (
        <main>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go back to home page</Link>
        </main>
    );
}