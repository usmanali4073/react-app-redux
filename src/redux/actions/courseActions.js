import { CREATE_COURSE } from "../reduxconst/actionConst";

export function createCourse(course) {
  return { type: CREATE_COURSE, course: course };
}
