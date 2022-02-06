import { render } from "../../utils/test-utils"
import { FeaturedIssueTile, FeaturedIssueTitleProps } from "."

const THREE_DAYS = 3 * 3600 * 24

describe("FeaturedIssueTitle - component tests", () => {
  const defaultProps: FeaturedIssueTitleProps = {
    organizers: "Fulano de tal",
    issueSemester: "Excrescência 01 (2022/2)",
    acceptingPapersUntil: Date.now() + THREE_DAYS,
    subtitle:
      "Incididunt aliquip labore Lorem ipsum enim eiusmod tempor anim id culpa.",
    title: "Occaecat cupidatat fugiat non voluptate do.",
  }

  it("should not render without essential props", () => {
    ;["title", "issueSemester", "organizers"].forEach((requiredProp) => {
      const filteredProps = Object.entries(defaultProps).reduce(
        (obj: any, [key, value]) => {
          if (key !== requiredProp) {
            obj[key] = value
          }
          return obj
        },
        {}
      )
      const { container } = render(
        <FeaturedIssueTile {...filteredProps}></FeaturedIssueTile>
      )
      expect(container).toBeEmptyDOMElement()
    })
  })
})