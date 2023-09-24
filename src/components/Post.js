import { Link } from "react-router-dom";

function Post (props){
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };
    return (
    <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.position}</h1>
        </Link>
        <h2>{post.details}</h2>
        <h2>{post.position}</h2>
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
    </div>
    );
};

export default Post