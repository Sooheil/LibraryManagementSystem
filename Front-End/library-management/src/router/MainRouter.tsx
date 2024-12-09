import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginLayout from '../layouts/loginLayout/LoginLayout';
import LoginPage from '../pages/login/LoginPage';
import appRouter from './appRouter';
import MainLayout from '../layouts/mainLayout/MainLayout';
import BookListPage from '../pages/bookListPage/BookListPage';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route element={<LoginPage />} path={appRouter.LOGIN_PAGE} />
        </Route>
        <Route element={<MainLayout />}>
          <Route element={<BookListPage />} path={appRouter.BOOK_LIST_PAGE} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
