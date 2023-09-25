import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props) {
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    };

    return (
        <div style={div}>
            <h1>{post.position}</h1>
            <h2>{post.company_name}</h2>
            <h2>{post.job_description}</h2>
            <h2>{post.applied}</h2>
            <h2>{post.type_of_resume_sent}</h2>
            <h2>{post.date_applied}</h2>
            <h2>{post.hiring_manager}</h2>
            <h2>{post.hiring_manager_email}</h2>
            <h2>{post.hiring_manager_phone}</h2>
            <h2>{post.interview_status}</h2>
            <h2>{post.application_origin}</h2>
            <h2>{post.thankyou_sent}</h2>
            <div style ={{ textAlign: "center" }}>
                <h2>Update Job</h2>
                <Form method="post" action={`/update/${post.id}}`}>
                    <input type="text" name="position" placeholder="Job Position" defaultValue={post.position}/>
                    <input type="text" name="company_name" placeholder="Company Name" defaultValue={post.company_name}/>
                    <input type="text" name="job_description" placeholder="Job Description" defaultValue={post.job_description}/>
                    <input type="checkbox" name="applied" placeholder="Applied" defaultValue={post.applied}/>
                    <input type="text" name="type_of_resume_sent" placeholder="ATS or Design Resume" defaultValue={post.type_of_resume_sent}/>
                    <input type="date" name="date_applied" placeholder="Date Applied" defaultValue={post.date_applied}/>
                    <input type="text" name="hiring_manager" placeholder="Hiring Manager" defaultValue={post.hiring_manager}/>
                    <input type="text" name="hiring_manager_email" placeholder="Hiring Manager email" defaultValue={post.hiring_manager_email}/>
                    <input type="number" name="hiring_manager_phone" placeholder="Hiring Manager Phone #" defaultValue={post.hiring_manager_phone}/>
                    <input type="text" name="interview_status" placeholder="Interview Status" defaultValue={post.interview_status}/>
                    <input type="text" name="application_origin" placeholder="Where did you find application" defaultValue={post.application_origin}/>
                    <input type="checkbox" name="thankyou_sent" placeholder="Thank you note sent" defaultValue={post.thankyou_sent}/>
                    <button>Update Job</button>
                </Form>
                <Form method="post" action={`/delete/${post.id}`}>
                    <button>Delete Job</button>
                </Form>
            </div>
            <Link to ="/">Back to Index</Link>
        </div>
    );
}

export default Show;