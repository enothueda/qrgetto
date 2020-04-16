import React from 'react';
import QrReader from 'react-qr-reader'

import './qr.reader.styles.scss';

class QRCodeReader extends React.Component {
    state = {
        result: 'No result'
      }
     
      handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
      }
      handleError = err => {
        console.error(err)
      }
      render() {
        return (
          <div className='qr-reader'>
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
            <p>{this.state.result}</p>
          </div>
        )
      }
}

export default QRCodeReader;