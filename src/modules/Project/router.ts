import { Home } from "@modules/Project/pages";
import { protectedComponent } from "@hoc/protectedComponent";

export const ProjectRouter = {
  path: "/",
  exact: true,
  component: protectedComponent(Home),
};
