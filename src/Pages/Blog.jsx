import { FaRegCalendarAlt, FaUserMd } from "react-icons/fa";
import { useBlog } from "../Hooks/useBlog";

const Blog = () => {
  const [blogs] = useBlog();
  console.log(blogs);

  //   useEffect(() => {
  //     setBlogs(blogData);
  //   }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Latest Health Blogs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FaUserMd /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt /> {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
