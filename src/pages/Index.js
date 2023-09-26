import Post from "../components/Post";
import {useLoaderData, Form} from "react-router-dom";

function Index (props){
    const jobs = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create New Job Application</h2>
        <Form method="post" action="/create">
            <fieldset>
                <label for="positionField">Job Position</label>
                <input type="text" name="position" placeholder="Job Position"/>
                <label for="companyField">Company Name</label>
                <input type="text" name="company_name" placeholder="Company Name"/>
                <label for="jobDescriptionField">Job Description</label>
                <input type="text" name="job_description" id="jobDescription" placeholder="Job Description"/>
                <h3>Did you apply?</h3><input type="checkbox" id="appliedField" name="applied" placeholder="Applied"/>
                <label for="resumeField">Type of resume sent</label>
                <input type="text" name="type_of_resume_sent" placeholder="ATS or Design Resume"/>
                <h3>Date Applied</h3><input type="date" name="date_applied" placeholder="Date Applied"/>
                <label for="managerField">Hiring Manager</label>
                <input type="text" name="hiring_manager" placeholder="Hiring Manager"/>
                <label for="contactEmailField">Hiring Manager Email</label>
                <input type="text" name="hiring_manager_email" placeholder="Hiring Manager email"/>
                <label for="managerPhoneField">Hiring Manager Phone</label>
                <input type="number" name="hiring_manager_phone" placeholder="Hiring Manager Phone #"/>
                <label for="interviewField">Interview Status</label>
                <input type="text" name="interview_status" placeholder="Interview Status"/>
                <label for="appOriginField">Origin of Job Posting</label>
                <input type="text" name="application_origin" placeholder="Where did you find application"/>
                <h3>Did you send a thank you note?</h3><input type="checkbox" id="tynoteField" name="thankyou_sent" placeholder="Thank you note sent"/>
                <input class="button-primary" type="submit" value="Create New Job Application" />
            </fieldset>
        </Form>
    </div>
    {jobs.map((job) => <Post key={job.id} post={job}/>)}
</>
}

export default Index;