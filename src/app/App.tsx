import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="Loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
