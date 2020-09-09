import Home from "../views/home"
import Show from "../views/show"

interface routeInterface {
  path: string,
  Component: React.FC<any> | any,
  exact?: boolean
  children?: Array<routeInterface>
}

const routers: Array<routeInterface> = [
  {
    path: '/',
    Component: Home,
    exact: true
  },
  {
    path: '/show',
    Component: Show
  }
]
export default routers