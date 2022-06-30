import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import {
  ADMIN_AUTH,
  LANDING_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  LOGIN_ROUTE,
  MERCHANTS_ROUTE,
  NOT_FOUND_ROUTE,
  PASSWORD_PERSONALIZATION_ROUTE,
  PASSWORD_RESET_SUCCESSFULL_ROUTE,
  REGISTER_ROUTE,
  REGISTRATION_SUCCESSFUL_ROUTE,
  TRANSACTIONS_ROUTE,
  DAASHBOARD_ROUTE,
  MESSAGES_ROUTE,
  DSA_DASHBOARD_ROUTE
} from '../utils/routes'

const Landing = React.lazy(() => import('../pages/landing'))
const Login = React.lazy(() => import('../pages/login'))
const Register = React.lazy(() => import('../pages/register'))
const ForgotPassword = React.lazy(() => import('../pages/forgot-password'))
const PasswordResetForgotSuccessful = React.lazy(() =>
  import('../pages/password-reset-forgot-successful')
)
const RegistrationSuccessful = React.lazy(() =>
  import('../pages/registration-successful')
)
const AdminAuth = React.lazy(() => import('../pages/admin-auth'))
const PasswordPersonalization = React.lazy(() =>
  import('../pages/password-personalization')
)
const Dashboard = React.lazy(() => import('../pages/dashboard/index'))
const Merchants = React.lazy(() => import('../pages/dashboard/merchants'))
const Transactions = React.lazy(() => import('../pages/dashboard/transactions'))
const Messages = React.lazy(() => import('../pages/dashboard/messages'))
const NotFound = React.lazy(() => import('../pages/not-found'))
const DSA_Dashboard = React.lazy(() => import('../pages/DSA_dashboard/index'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path={LANDING_ROUTE} component={Landing} />
      <Route exact path={LOGIN_ROUTE} component={Login} />
      <Route exact path={REGISTER_ROUTE} component={Register} />
      <Route exact path={FORGOT_PASSWORD_ROUTE} component={ForgotPassword} />
      <Route
        exact
        path={PASSWORD_RESET_SUCCESSFULL_ROUTE}
        component={PasswordResetForgotSuccessful}
      />
      <Route
        exact
        path={REGISTRATION_SUCCESSFUL_ROUTE}
        component={RegistrationSuccessful}
      />
      <Route exact path={ADMIN_AUTH} component={AdminAuth} />
      <Route
        exact
        path={PASSWORD_PERSONALIZATION_ROUTE}
        component={PasswordPersonalization}
      />
      <Route exact path={DSA_DASHBOARD_ROUTE} component={DSA_Dashboard} />
      <Route exact path={DAASHBOARD_ROUTE} component={Dashboard} />
      <Route exact path={MERCHANTS_ROUTE} component={Merchants} />
      <Route exact path={TRANSACTIONS_ROUTE} component={Transactions} />
      <Route exact path={MESSAGES_ROUTE} component={Messages} />
      <Route exact path={NOT_FOUND_ROUTE} component={NotFound} />
      <Redirect from='*' to={NOT_FOUND_ROUTE} />
    </Switch>
  )
}

export default Routes
