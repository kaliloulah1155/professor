import React from 'react'

export const Contenu = ({ activeContent }) => {
  return (
      <div className="w-3/4 p-4">
          {/* Content */}
          {activeContent === 'dashboard' && (
              <div id="contenu">Dashboard Content Goes Here</div>
          )}
          {activeContent === 'profile' && (
              <div id="contenu">Profile Content Goes Here</div>
          )}
          {activeContent === 'settings' && (
              <div id="contenu">Settings Content Goes Here</div>
          )}
      </div>
  )
}
