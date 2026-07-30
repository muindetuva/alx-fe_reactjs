import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import PageLayout from './layouts/PageLayout.jsx'
import UsersLayout from './layouts/UsersLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'
import UsersIndexPage from './pages/UsersIndexPage.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

function AppShell() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'users',
        element: <UsersLayout />,
        children: [
          { index: true, element: <UsersIndexPage /> },
          { path: ':username', element: <UserProfilePage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
