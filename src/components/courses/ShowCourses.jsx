import { Container, CardGrid, Card, Button } from "@edx/paragon";
import fetchCoursesApi from "./data/fetchCourses";
const ShowCourses = () => {
  const courses = fetchCoursesApi();
  console.log("courses", courses);
  return (
    <main>
      <Container className="py-5 px-5">
        <h1>edX courses with tutor nightly</h1>
        <p>Welcome to Edx courses!</p>
        <Container className="pt-5">
          <CardGrid
            columnSizes={{
              xs: 12,
              lg: 6,
              xl: 4,
            }}
          >
            {courses.map((course) => (
              <Card key={course.name}>
                <Card.ImageCap
                  src={course.media.image.raw}
                  srcAlt="Card image"
                  logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/2560px-EdX_newer_logo.svg.png"
                  fallbackLogoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/2560px-EdX_newer_logo.svg.png"
                  logoAlt="Card logo"
                />
                <Card.Header title={course.name} subtitle={course.number} />
                <Card.Footer>
                  <Button
                    as="a"
                    href={`http://local.overhang.io:8000/courses/${course.course_id}/about`}
                  >
                    View Course
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </CardGrid>
        </Container>
      </Container>
    </main>
  );
};

export default ShowCourses;
