// @ts-expect-error TS(7016): Could not find a declaration file for module 'chai... Remove this comment to see the full error message
import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
// @ts-expect-error TS(2307): Cannot find module '@/components/HelloWorld.vue' o... Remove this comment to see the full error message
import HelloWorld from "@/components/HelloWorld.vue";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("HelloWorld.vue", () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
