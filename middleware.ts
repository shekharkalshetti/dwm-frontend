import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

export const config = {
  matcher: [
    "/",
    "/departments/:path*",
    "/empty-dash",
    "/settings",
    "/task-configurator",
  ],
};
