import { useParams, useSearchParams } from "react-router-dom";
const PostDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { postId } = useParams();

  const setParams = () => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    const detail = searchParams.get("page");
    console.log(`현재 페이지는 ${detail}`);
  };

  console.log(postId);
  return (
    <div>
      <h1>글 상세페이지입니다.</h1>
      <h3>글의 id값은 {postId}</h3>
      <button onClick={setParams}> searchParam</button>
    </div>
  );
};

export default PostDetail;
