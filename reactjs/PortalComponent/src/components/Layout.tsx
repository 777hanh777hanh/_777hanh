interface LayoutProps {
    children?: React.ReactNode | undefined | null;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <h2>Header</h2>
            <div className="main">{children}</div>
            <h2>Footer</h2>
        </div>
    );
};

export default Layout;
