import Post from "../components/Post";
import {useLoaderData} from "react-router-dom";

function Index (props){
    const jobs = useLoaderdata()

    return jobs.map((job) => <Post key={job.id} post={job}/>)
}

export default Index;