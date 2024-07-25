import {Component} from 'react'

import {
  MainContainer,
  TextCard,
  CardHeading,
  EditContainer,
  TextInput,
  Button,
  ParaContainer,
  ParaText,
} from './styling'

class EditableText extends Component {
  state = {isEditState: true, text: ''}

  changeToSave = () => {
    this.setState({isEditState: false})
  }

  changeToEdit = () => {
    this.setState({isEditState: true})
  }

  updateText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, isEditState} = this.state
    return (
      <MainContainer>
        <TextCard>
          <CardHeading>Editable Text Input</CardHeading>

          {isEditState ? (
            <EditContainer>
              <TextInput type="text" onChange={this.updateText} value={text} />
              <Button type="button" onClick={this.changeToSave}>
                Save
              </Button>
            </EditContainer>
          ) : (
            <ParaContainer>
              <ParaText>{text}</ParaText>
              <Button type="button" onClick={this.changeToEdit}>
                Edit
              </Button>
            </ParaContainer>
          )}
        </TextCard>
      </MainContainer>
    )
  }
}

export default EditableText
