import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span>
        Page Not Found
      </h1>
      <p className="lead">Requested page not exist</p>
    </div>
  );
}
