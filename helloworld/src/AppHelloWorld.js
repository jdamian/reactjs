
import PropTypes from 'prop-types'

const AppHelloWorld = ( {mensaje, subtitle } ) => {
  return(
    <>
      <h1>Hello World</h1>
      <p>This is a simple React app</p>
      <p>{mensaje}</p>
    </>
  );
}

AppHelloWorld.propTypes = {
  mensaje: PropTypes.string.isRequired
}

AppHelloWorld.defaultProps = {
  mensaje: 'Bienvenido a mi primera pagina en reactjs',
  subtitle: 'Subtitulo'
}

export default AppHelloWorld;