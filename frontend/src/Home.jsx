import RecentThreads from "./RecentThreads"
import ThreadCreator from "./ThreadCreator"

function Home() {
    return(
        <>
            <h1 className="self-center">Recent Threads</h1>      
            <RecentThreads />
            <ThreadCreator />
        </>
    )
}
export default Home