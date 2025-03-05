// 监听安装事件，确保安装后 Service Worker 激活
self.addEventListener('install', (event) => {
  console.log('Service Worker installed')
  self.skipWaiting()
})

// 监听激活事件
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated')
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'update') {
    // 执行保存操作
    console.log('保存进度:', event.data.data)
    // 可以通过 fetch API 或其他方法将数据发送到服务器
    const data = event.data.data
    fetch(`http://localhost:3001/book/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${event.data.token}`,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        console.log('Progress saved via fetch')
      }
      else {
        console.error('Failed to save progress')
      }
    }).catch((error) => {
      console.error('Failed to save progress via fetch', error)
    })
  }
})
