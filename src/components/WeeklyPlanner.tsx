import { useEffect, useState } from 'react'

type TaskItem = {
  id: number
  text: string
  done: boolean
}

type WeekPlan = Record<string, TaskItem[]>

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const STORAGE_KEY = 'codcentral-week-plan'

const createEmptyPlan = (): WeekPlan => {
  const plan: WeekPlan = {}
  days.forEach((day) => {
    plan[day] = []
  })
  return plan
}

const loadPlan = (): WeekPlan => {
  if (typeof window === 'undefined') return createEmptyPlan()

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) return createEmptyPlan()

    const parsed = JSON.parse(saved) as WeekPlan
    return {
      ...createEmptyPlan(),
      ...parsed,
    }
  } catch {
    return createEmptyPlan()
  }
}

export default function WeeklyPlanner() {
  const [plan, setPlan] = useState<WeekPlan>(createEmptyPlan())
  const [drafts, setDrafts] = useState<Record<string, string>>({})

  useEffect(() => {
    setPlan(loadPlan())
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
    }
  }, [plan])

  const addTask = (day: string) => {
    const value = drafts[day]?.trim()
    if (!value) return

    setPlan((current) => ({
      ...current,
      [day]: [...(current[day] || []), { id: Date.now(), text: value, done: false }],
    }))
    setDrafts((current) => ({ ...current, [day]: '' }))
  }

  const toggleTask = (day: string, id: number) => {
    setPlan((current) => ({
      ...current,
      [day]: (current[day] || []).map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    }))
  }

  const removeTask = (day: string, id: number) => {
    setPlan((current) => ({
      ...current,
      [day]: (current[day] || []).filter((task) => task.id !== id),
    }))
  }

  return (
    <section
      id="weekly-planner"
      style={{
        background: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: '120px 60px',
        borderTop: '0.5px solid rgba(8,23,57,0.08)',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-tertiary)', marginBottom: 12 }}>
            Week Planner
          </div>
          <h2 style={{ fontFamily: "'Godens','Bebas Neue','DM Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(32px,4.5vw,54px)', lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase', marginBottom: 12 }}>
            Plan the week ahead
          </h2>
          <p style={{ maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: 'rgba(8,23,57,0.65)' }}>
            Add priorities for each day of the week and keep your workload visible in one place.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {days.map((day) => (
            <div key={day} style={{ border: '1px solid rgba(8,23,57,0.1)', borderRadius: 12, padding: 16, background: 'rgba(8,23,57,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>{day}</h3>
                <span style={{ fontSize: 12, color: 'rgba(8,23,57,0.55)' }}>{(plan[day] || []).length} task{(plan[day] || []).length === 1 ? '' : 's'}</span>
              </div>

              <div style={{ display: 'grid', gap: 8, marginBottom: 10 }}>
                {(plan[day] || []).map((task) => (
                  <div key={task.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 0', borderBottom: '1px solid rgba(8,23,57,0.07)' }}>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(day, task.id)}
                      style={{ marginTop: 3 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, textDecoration: task.done ? 'line-through' : 'none', color: task.done ? 'rgba(8,23,57,0.45)' : 'inherit' }}>
                        {task.text}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeTask(day, task.id)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--color-tertiary)', cursor: 'pointer', fontSize: 13 }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  value={drafts[day] || ''}
                  onChange={(e) => setDrafts((current) => ({ ...current, [day]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addTask(day)
                    }
                  }}
                  placeholder="Add task"
                  style={{ flex: 1, border: '1px solid rgba(8,23,57,0.12)', borderRadius: 6, padding: '10px 12px', fontSize: 13 }}
                />
                <button
                  type="button"
                  onClick={() => addTask(day)}
                  style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', border: 'none', borderRadius: 6, padding: '10px 12px', cursor: 'pointer', fontWeight: 700 }}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
