import dayjs from "dayjs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../../admin/components/skeleton/Skeleton";
import Container from "../../container/Container";
import { useGteBlogBySlugQuery } from "../../features/blog/blogs";
import imagePath from "../../utils/imagePath";

function BlogSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // * Hokes
  const { slug } = useParams();

  // * Redux Hokes
  const { data, isLoading } = useGteBlogBySlugQuery(slug);

  if (isLoading) {
    return (
      <div className="bg-white">
        <Container>
          <div className="w-full">
            <Skeleton height="h-[500px] mt-5" />

            <div className="flex justify-between mb-3 mt-3">
              <div className="text-[14px] font-[font-500] text-gray-700">
                <Skeleton height="h-[20px] w-[200px]" />
              </div>

              <div className="text-[14px] font-[font-500] text-gray-700">
                <Skeleton height="h-[20px] w-[200px]" />
              </div>
            </div>

            <h1 className="font-[font-600] mt-5 text-[20px] md:text-[25px]">
              <Skeleton height="h-[20px] w-full" />
              <Skeleton height="h-[20px] w-full mt-1" />
            </h1>

            <p className="mt-10 mb-5">
              <Skeleton height="h-[20px] w-full" />
              <Skeleton height="h-[20px] w-full mt-1" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
              <Skeleton height="h-[20px] w-full mt-2" />
            </p>
          </div>
        </Container>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div className="bg-white">
        <Container>
          <div className="w-full">
            <img
              src={imagePath(data?.featureImage)}
              alt=""
              className="mt-5 rounded h-[200px] sm:h-[350px] md:h-[450px] xl:h-[600px] w-full object-cover"
            />

            <div className="flex justify-between mb-3 mt-3">
              <div className="text-[14px] font-[font-500] text-gray-700">
                {data?.userName}
              </div>

              <div className="text-[14px] font-[font-500] text-gray-700">
                {dayjs(data?.createdAt).format("DD MMMM, YYYY")}
              </div>
            </div>

            <h1 className="font-[font-600] mt-5 text-[20px] md:text-[25px]">
              {data?.title}
            </h1>

            <p
              className="mt-10 mb-10"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default BlogSingle;
