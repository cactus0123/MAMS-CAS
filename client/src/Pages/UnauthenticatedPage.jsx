import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

function UnauthenticatedPage() {
  return (
  <>
    <UnauthenticatedTemplate>
      <div className="unauthenticated-div">
        <p>Please sign in with your WPI email to make/view course requests.</p>
      </div>
    </UnauthenticatedTemplate>
    <AuthenticatedTemplate>
      <Navigate to="/select"/>
    </AuthenticatedTemplate>
  </>
  )
}
export default UnauthenticatedPage;