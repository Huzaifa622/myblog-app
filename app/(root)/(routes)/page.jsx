import Card from "@/components/card";
import Heading from "@/components/heading";
import prisma from "@/lib/prismadb";



const Homepage = async () => {
  const blogs = await prisma.userBlog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  
  return (
    <div className="space-y-8">
      <Heading>Welcome</Heading>
      <div className="px-4 ">
        <div className="px-2 mt-4 md:pr-20 mr-20">
          <p className="text-xl font-semibold text-muted-foreground">
           Blogs
          </p>
          <div className="grid grid-cols-3 mt-4 mb-3 relative">
            {blogs.length>0?(blogs.map((blog) => (
              <Card user={false} blog={blog} cond={true} />
            ))):"No blogs"}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
