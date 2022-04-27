import { defineComponent, ref } from "vue"
interface PropsType {
  name: String
}
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const count = ref(0)
    return (props: PropsType) => (
      <div>
        {props.name}
        {count.value}
      </div>
    )
  }
})

// export default defineComponent({
//   props: {
//     name: {
//       type: String,
//       required: true
//     }
//   },
//   render() {
//     return (
//       <div>{this.name}</div>
//     )
//   }
// })