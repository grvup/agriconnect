import Hireworkers from "./Hireworkers";
// import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Leftbars = ({userId}) => {
    const { isLoading, error, data } = useQuery(["posts"], () =>
      makeRequest.get("/posts?userId="+userId).then((res) => {
        return res.data;
      })
    );
  
  //  console.log({userId})
    return (
      <div className="posts">
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading"
          : data.map((post) => <Leftbar post={post} key={post.id} />)}
      </div>
    );
  };
  
  export default Leftbars;