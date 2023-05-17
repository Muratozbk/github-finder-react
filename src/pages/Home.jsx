import UserResults from "../components/users/UserResults";

function Home() {
    return (
        <>
            {/* Search Component */}
            <UserResults />
        </>
    );
}

export default Home;

// {process.env.REACT_APP_GITHUB_TOKEN}  process.env