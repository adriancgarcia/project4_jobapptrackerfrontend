import Post from "../components/Post";
import {useLoaderData, Form} from "react-router-dom";

function Index (props){
    const jobs = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a new Job Application</h2>
        <Form method="post" action="/create">
            <input type="text" name="position" placeholder="Job Position"/>
            <input type="text" name="company_name" placeholder="Company Name"/>
            <input type="text" name="job_description" placeholder="Job Description"/>
            <input type="checkbox" name="applied" placeholder="Applied"/>
            <input type="text" name="type_of_resume_sent" placeholder="ATS or Design Resume"/>
            <input type="date" name="date_applied" placeholder="Date Applied"/>
            <input type="text" name="hiring_manager" placeholder="Hiring Manager"/>
            <input type="text" name="hiring_manager_email" placeholder="Hiring Manager email"/>
            <input type="number" name="hiring_manager_phone" placeholder="Hiring Manager Phone #"/>
            <input type="text" name="interview_status" placeholder="Interview Status"/>
            <input type="text" name="application_origin" placeholder="Where did you find application"/>
            <input type="checkbox" name="thankyou_sent" placeholder="Thank you note sent"/>
            <button>Create a new Job Application</button>
        </Form>
    </div>
    {jobs.map((job) => <Post key={job.id} post={job}/>)}
</>
}

export default Index;