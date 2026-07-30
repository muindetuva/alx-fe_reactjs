import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import LiveSearch from './components/LiveSearch.jsx'
import PageLayout from './components/PageLayout.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import ProfileCardModule from './components/ProfileCardModule.jsx'
import UserProfilePage from './components/UserProfilePage.jsx'
import UsersLayout from './components/UsersLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
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
      {
        index: true,
        element: (
          <HomePage
            profileCards={(
              <>
                <ProfileCard />
                <ProfileCardModule />
              </>
            )}
            liveSearch={<LiveSearch />}
          />
        ),
      },
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
