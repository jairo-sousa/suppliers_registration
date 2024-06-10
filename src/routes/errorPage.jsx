import { useRouteError } from "react-router-dom";
import "../styles/errorPage.css";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="errorPage" className="flex-col flex-center">
            <h1 id="errorPageTitle">Oops!</h1>
            <p>Desculpe, Ocorreu um erro inesperado.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
