chai = require 'chai'
chai.should()
{stix} = require '../lib/stix'

describe 'stix', ->
  describe '.compile', ->
    it 'Simple template', ->
      stix.compress = true
      
      template = stix.compile
        div: ->
          span: ->
            "Sample text"
      
      template().should.equal '<div><span>Sample text</span></div>'  
