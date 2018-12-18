import React from "react"

/*
  A higher-order component (HoC) is a function that:
    1- receives a COMPONENT as a parameter (hint: is this function receving a component?)
    2- and returns another component
*/
const withData = (component) => {
  class OuterComponent extends React.Component {
    state = {
      data: undefined,
      loading: false,
      error: undefined,
    }

    componentDidMount = async () => {
      this.setState({ loading: true })
      try {
        const response = await fetch(this.props.url)
        const data = await response.json()
        this.setState({ data })
      } catch(error) {
        this.setState({ error: error.message })
      } finally {
        this.setState({ loading: false })
      }
    }

    render() {
      const {loading, error,data} =this.state;
      return (
          <Component 
          { ...this.props } 
          data={loading}
          data={error}
          data={data}/>
      );
     // )

      //
      // render() {
      //   const {loading, error,data} =this.state;
      //   return (
      //       <Component 
      //       { ...this.props } 
      //       data={ this.state }/>
      //      <Component { ...this.props } error={ this.state }/>
      //      <Component { ...this.props } loading={ this.state }/>
          
      //   )
    }
  }

  return OuterComponent
}

export default withData
