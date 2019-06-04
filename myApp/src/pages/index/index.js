import Taro, {Component} from '@tarojs/taro'
import {View, Text, Input, Button} from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super()
    this.state = {
      list: ['get up', 'coding', 'sleep'],
      inputVal: null
    }
  }
  addItem() {
    const {list, inputVal} = this.state
    if (inputVal) {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: null
    })
  }
  delItem(index) {
    const {list} = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  inputHandler(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {
    const {list, inputVal} = this.state
    return (
      <View className='index'>
        <View className='input-container'>
          <Input
            className='input'
            type='text'
            value={inputVal}
            onInput={this.inputHandler.bind(this)}
          />
          <Button className='add' onClick={this.addItem.bind(this)}>
            添加
          </Button>
        </View>
        <View className='list_wrap'>
          <Text>Todo list</Text>
          {list.map((item, index) => {
            return (
              <View key={item} className='list-item'>
                <Text className='content'>{index+1}{'. '}{item}</Text>
                <Button
                  className='del'
                  onClick={this.delItem.bind(this, index)}
                >
                  删除
                </Button>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
