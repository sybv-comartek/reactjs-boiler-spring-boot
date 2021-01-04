import { RouteConfig } from "react-router-config";
import { AuthRouter } from "@modules/Auth/router";
// import { ProjectRouter } from '@modules/Project/router';
// import { OrganizationRouter } from '@modules/Organization/router';
import EmptyLayout from "@commons/components/layouts/Empty";
const routes: RouteConfig[] = [
  {
    component: EmptyLayout,
    routes: [{ ...AuthRouter }],
  },
];

export default routes;
