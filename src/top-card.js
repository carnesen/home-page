import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default function TopCard () {
  return (
    <Card>
      <CardMedia>
        <div style={{ display: 'flex' }}>
          <img src="images/me.jpg" style={{ width: '10%', height: '10%' }}/>
          <h1>Chris Arnesen</h1>
        </div>
      </CardMedia>
    </Card>
  )
}