import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import ProtectedRoute from './helpers/protected.route';
import IsUserLoggedIn from './helpers/is-user-logged-in';


const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const Dashboard = lazy(() => import ('./pages/dashboard'));
const NotFound = lazy(() => import ('./pages/notfound'));
const Profile = lazy(() => import ('./pages/profile'));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
            <Login />
          </IsUserLoggedIn>
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserLoggedIn>
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
          <Dashboard />
          </ProtectedRoute>
          <Route path={ROUTES.PROFILE} component={Profile}/>
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;